import reflex as rx
import random


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
    features_box_data = [
        {
            "icon": "⚡",
            "title": "极速访问",
            "description": "利用全球 CDN 节点，大幅提升文件加载速度",
        },
        {
            "icon": "🌍",
            "title": "全球加速",
            "description": "支持多个主流 CDN 服务商，覆盖全球用户",
        },
        {
            "icon": "🔄",
            "title": "实时同步",
            "description": "自动同步 GitHub 最新版本，确保资源时效性",
        },
    ]

    @rx.event
    def get_transform_url(self):
        self.cdn_urls = []
        icons = [
            "🌟",
            "💫",
            "✨",
            "🎯",
            "🔥",
            "💎",
            "🌈",
            "🎨",
            "🎪",
            "🎭",
            "🎮",
            "🎸",
            "🎺",
            "🎹",
            "🎪",
            "🎬",
            "🎯",
            "🎲",
            "🎊",
            "🎉",
        ]
        for cdn_prefix in cdn_prefixs:
            converted_url = covert_url_from_github(self.github_url, cdn_prefix)
            if converted_url:
                self.cdn_urls.append(
                    {
                        "name": cdn_prefix_names[cdn_prefixs.index(cdn_prefix)],
                        "url": converted_url,
                        "icon": random.choice(icons),
                    }
                )

    @rx.event
    def clear_data(self):
        self.reset()


def header_section() -> rx.Component:
    return (
        rx.el.div(
            rx.el.h1(
                "🚀 GitHub CDN 转换工具",
                class_name="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent",
            ),
            rx.el.p(
                "将您的 GitHub 文件链接转换为高速 CDN 静态资源链接，提升访问速度和稳定性",
                class_name="text-gray-600 text-lg text-center leading-relaxed",
            ),
            class_name="text-center mb-10",
        ),
    )


def input_section() -> rx.Component:
    return (
        rx.el.div(
            rx.el.div(
                rx.el.label(
                    "GitHub 文件链接",
                    class_name="block text-gray-700 font-semibold mb-2 text-sm",
                ),
                rx.el.input(
                    type="url",
                    placeholder="https://github.com/username/repository/blob/main/file.js",
                    value=IndexState.github_url,
                    on_change=IndexState.set_github_url,
                    class_name="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all duration-300 bg-white focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:transform focus:-translate-y-1",
                ),
                class_name="relative mb-5",
            ),
            rx.el.div(
                rx.el.button(
                    "🔄 转换为 CDN 链接",
                    on_click=IndexState.get_transform_url,
                    class_name="w-full p-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white border-none rounded-xl text-lg font-semibold cursor-pointer transition-all duration-300 relative overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-300 active:transform active:translate-y-0",
                ),
                rx.el.button(
                    "⚠️ 清除数据",
                    on_click=IndexState.clear_data,
                    class_name="w-full p-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white border-none rounded-xl text-lg font-semibold cursor-pointer transition-all duration-300 relative overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-300 active:transform active:translate-y-0",
                ),
                class_name="flex flex-row gap-4",
            ),
            class_name="mb-8",
        ),
    )


def single_output_section(item: dict[str, str]) -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.el.span(
                item["icon"],
                class_name="mr-2 text-lg",
            ),
            item["name"],
            class_name="text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wider flex items-center",
        ),
        rx.el.div(
            rx.el.span(
                item["url"],
                class_name="text-gray-800 font-mono text-sm break-all leading-relaxed",
            ),
            rx.el.button(
                "复制",
                on_click=rx.set_clipboard(item["url"]),
                class_name="absolute top-3 right-3 bg-indigo-500 text-white border-none py-1 px-3 rounded-md text-xs cursor-pointer transition-all duration-200 hover:bg-indigo-600 hover:scale-105 active:scale-95",
            ),
            class_name="text-gray-800 font-mono text-sm break-all leading-relaxed bg-gray-50 p-3 rounded-lg border-l-4 border-indigo-400 relative",
        ),
        class_name="mb-5 p-5 bg-white rounded-xl shadow-sm transition-transform duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg",
    )


def output_section() -> rx.Component:
    return (
        rx.cond(
            IndexState.cdn_urls,
            rx.el.div(
                rx.foreach(
                    IndexState.cdn_urls,
                    lambda item: single_output_section(item),
                ),
                id="output-section",
                class_name="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200",
            ),
        ),
    )


def features_box(icon: str, title: str, description: str) -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.el.div(
                icon,
                class_name="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full flex items-center justify-center text-2xl text-white",
            ),
            rx.el.h3(
                title,
                class_name="text-gray-800 mb-2 text-lg font-semibold",
            ),
            rx.el.p(
                description,
                class_name="text-gray-600 text-sm leading-relaxed",
            ),
            class_name="bg-white p-5 rounded-xl text-center shadow-sm transition-transform duration-200 hover:transform hover:-translate-y-2 hover:shadow-lg",
        ),
        class_name="grid-cols-1 md:grid-cols-3 gap-5",
    )


def features_section() -> rx.Component:
    return rx.el.div(
        rx.foreach(
            IndexState.features_box_data,
            lambda item: features_box(item["icon"], item["title"], item["description"]),
        ),
        class_name="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8",
    )


def index() -> rx.Component:
    return rx.el.div(
        rx.el.div(
            # Header section
            header_section(),
            # Input section
            input_section(),
            # Result section
            output_section(),
            # Features section
            features_section(),
            class_name="animate-fadeInUp bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl shadow-2xl shadow-black/10 w-full max-w-4xl p-10 animate-fade-in-up",
        ),
        class_name="min-h-screen bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center p-5 ",
    )


app = rx.App(theme=rx.theme(color_mode="light"), stylesheets=["/style.css"])
app.add_page(
    index,
    title="链接转换",
    description="将github链接转换为CDN链接",
    on_load=IndexState.clear_data,
)
