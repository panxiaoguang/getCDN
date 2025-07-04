import reflex as rx


def covert_url_from_github(gh_link: str, cdn_prefix: str) -> str:
    if gh_link.startswith("https://github.com/"):
        new_link = gh_link.replace("https://github.com", cdn_prefix).replace(
            "/blob/", "@"
        )
    elif gh_link.startswith("https://raw.githubusercontent.com/"):
        new_link = gh_link.replace(
            "https://raw.githubusercontent.com", cdn_prefix
        ).replace("/refs/heads/", "@")
    else:
        new_link = ""
    return new_link


cdn_prefixs = [
    "https://cdn.jsdelivr.net/gh",
    "https://gcore.jsdelivr.net/gh",
    "https://testingcf.jsdelivr.net/gh",
    "https://quantil.jsdelivr.net/gh",
    "https://fastly.jsdelivr.net/gh",
    "https://originfastly.jsdelivr.net/gh",
    "https://cdn.jsdmirror.com/gh",
]

cdn_prefix_names = [
    "jsDelivr[official]",
    "GCore",
    "CloudFlare",
    "Quantil",
    "Fastly",
    "OriginFastly",
    "jsdmirror[CN]",
]


class IndexState(rx.State):
    github_url: str = ""
    cdn_urls: list[dict[str, str]] = []

    @rx.event
    def get_transform_url(self):
        self.cdn_urls = []
        for cdn_prefix in cdn_prefixs:
            converted_url = covert_url_from_github(self.github_url, cdn_prefix)
            if converted_url:
                self.cdn_urls.append(
                    {
                        "name": cdn_prefix_names[cdn_prefixs.index(cdn_prefix)],
                        "url": converted_url,
                    }
                )

    @rx.event
    def clear_data(self):
        self.github_url = ""
        self.cdn_urls = []


def title() -> rx.Component:
    return rx.center(
        rx.vstack(
            rx.heading("Github CDN 加速", size="9"),
            rx.text("粘贴您的 GitHub 文件链接，即刻获取全球高速访问地址。", size="5"),
            direction="column",
            justify="center",
            align="center",
            spacing="3",
            width="100%",
        ),
        class_name="pt-20 text-white pb-10",
    )


def output_single_line(name: str, url: str) -> rx.Component:
    return rx.hstack(
        rx.text(f"{name}:", class_name="text-gray-400"),
        rx.el.div(
            rx.link(
                url,
                href=url,
                is_external=True,
                class_name="text-blue-500 hover:text-blue-600",
            ),
        ),
        class_name="text-lg",
    )


def no_output() -> rx.Component:
    return rx.text(
        "转换后的链接将显示在这里...", class_name="text-center text-gray-400", size="4"
    )


def output_content() -> rx.Component:
    return rx.flex(
        rx.foreach(
            IndexState.cdn_urls,
            lambda cdns: output_single_line(cdns["name"], cdns["url"]),
        ),
        direction="column",
        justify="start",
    )


def input_card() -> rx.Component:
    return rx.flex(
        rx.vstack(
            rx.flex(
                rx.flex(
                    rx.icon(
                        tag="paperclip",
                        class_name="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400",
                    ),
                    rx.el.input(
                        id="github-url-input",
                        type="text",
                        placeholder="例如: https://github.com/user/repo/blob/main/file.js",
                        size="3",
                        width="100%",
                        height="50px",
                        class_name="text-white bg-gray-900/50 border border-gray-600 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300",
                        on_change=IndexState.set_github_url,
                    ),
                    class_name="relative",
                    width="80%",
                ),
                rx.button(
                    "转换链接",
                    size="3",
                    height="50px",
                    class_name="bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg px-6 py-3 transition-all duration-300 ease-in-out flex-shrink-0 cursor-pointer",
                    on_click=IndexState.get_transform_url,
                ),
                width="100%",
                align="center",
                justify="center",
                spacing="5",
            ),
            rx.divider(class_name="my-8 border-t border-gray-700", width="95%"),
            rx.cond(
                IndexState.cdn_urls,
                output_content(),
                no_output(),
            ),
            align="center",
            width="100%",
        ),
        width="60%",
        class_name="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-gray-700",
    )


def index() -> rx.Component:
    return rx.flex(
        title(),
        input_card(),
        spacing="4",
        direction="column",
        align="center",
        class_name="h-screen w-full",
        background_color=" #111827",
        background_image=" radial-gradient(at 47% 33%, hsl(210.00, 70%, 30%) 0, transparent 59%),radial-gradient(at 82% 65%, hsl(280.00, 60%, 25%) 0, transparent 55%)",
    )


app = rx.App(theme=rx.theme(color_mode="light"))
app.add_page(
    index,
    title="链接转换",
    description="将github链接转换为CDN链接",
    on_load=IndexState.clear_data,
)
