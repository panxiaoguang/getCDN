

import { Fragment, useCallback, useContext, useEffect, useRef } from "react"
import { Button as RadixThemesButton, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Separator as RadixThemesSeparator, Text as RadixThemesText } from "@radix-ui/themes"
import { Paperclip as LucidePaperclip } from "lucide-react"
import { Event, isTrue, refs } from "$/utils/state"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Link as ReactRouterLink } from "react-router"
import { jsx } from "@emotion/react"



function Flex_4fd49778e727316d42265693a7e17bc2 () {
  
  const reflex___state____state__get_cdn___get_cdn____index_state = useContext(StateContexts.reflex___state____state__get_cdn___get_cdn____index_state)





  
  return (
    jsx(
RadixThemesFlex,
{direction:"column",justify:"start"},
reflex___state____state__get_cdn___get_cdn____index_state.cdn_urls_rx_state_.map((cdns_rx_state_,index_bb330a0229c97803)=>(jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack text-lg",direction:"row",key:index_bb330a0229c97803,gap:"3"},
jsx(
RadixThemesText,
{as:"p",className:"text-gray-400"},
(cdns_rx_state_["name"]+":")
,),jsx(
"div",
{},
jsx(
RadixThemesLink,
{asChild:true,className:"text-blue-500 hover:text-blue-600",css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{target:(true ? "_blank" : ""),to:cdns_rx_state_["url"]},
cdns_rx_state_["url"]
,),),),))),)
  )
}

function Input_68140765256eac2ecbe2fa4aa3358d1a () {
  
  const ref_github_url_input = useRef(null); refs["ref_github_url_input"] = ref_github_url_input;
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_8041d6aeea165e3f89d9e3964fa474cf = useCallback(((_e) => (addEvents([(Event("reflex___state____state.get_cdn___get_cdn____index_state.set_github_url", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx("input",{className:"text-white bg-gray-900/50 border border-gray-600 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300",css:({ ["width"] : "100%", ["height"] : "50px" }),id:"github-url-input",onChange:on_change_8041d6aeea165e3f89d9e3964fa474cf,placeholder:"\u4f8b\u5982: https://github.com/user/repo/blob/main/file.js",ref:ref_github_url_input,size:"3",type:"text"},)

  )
}

function Button_b93551df5d077fc9c2d889720946ec12 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_91929dd4f41f9a02118b1ab4d3a3f66d = useCallback(((_e) => (addEvents([(Event("reflex___state____state.get_cdn___get_cdn____index_state.get_transform_url", ({  }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{className:"bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg px-6 py-3 transition-all duration-300 ease-in-out flex-shrink-0 cursor-pointer",css:({ ["height"] : "50px" }),onClick:on_click_91929dd4f41f9a02118b1ab4d3a3f66d,size:"3"},
"\u8f6c\u6362\u94fe\u63a5"
,)
  )
}

function Fragment_8a889917dc32ab3ab3845f27121c8208 () {
  
  const reflex___state____state__get_cdn___get_cdn____index_state = useContext(StateContexts.reflex___state____state__get_cdn___get_cdn____index_state)





  
  return (
    jsx(
Fragment,
{},
(isTrue(reflex___state____state__get_cdn___get_cdn____index_state.cdn_urls_rx_state_) ? (jsx(
Fragment,
{},
jsx(Flex_4fd49778e727316d42265693a7e17bc2,{},)
,)) : (jsx(
Fragment,
{},
jsx(
RadixThemesText,
{as:"p",className:"text-center text-gray-400",size:"4"},
"\u8f6c\u6362\u540e\u7684\u94fe\u63a5\u5c06\u663e\u793a\u5728\u8fd9\u91cc..."
,),))),)
  )
}

export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(
RadixThemesFlex,
{align:"center",className:"h-screen w-full",css:({ ["backgroundColor"] : " #111827", ["backgroundImage"] : " radial-gradient(at 47% 33%, hsl(210.00, 70%, 30%) 0, transparent 59%),radial-gradient(at 82% 65%, hsl(280.00, 60%, 25%) 0, transparent 55%)" }),direction:"column",gap:"4"},
jsx(
RadixThemesFlex,
{className:"pt-20 text-white pb-10",css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},
jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",justify:"center",gap:"3"},
jsx(
RadixThemesHeading,
{size:"9"},
"Github CDN \u52a0\u901f"
,),jsx(
RadixThemesText,
{as:"p",size:"5"},
"\u7c98\u8d34\u60a8\u7684 GitHub \u6587\u4ef6\u94fe\u63a5\uff0c\u5373\u523b\u83b7\u53d6\u5168\u7403\u9ad8\u901f\u8bbf\u95ee\u5730\u5740\u3002"
,),),),jsx(
RadixThemesFlex,
{className:"bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-gray-700",css:({ ["width"] : "60%" })},
jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},
jsx(
RadixThemesFlex,
{align:"center",css:({ ["width"] : "100%" }),justify:"center",gap:"5"},
jsx(
RadixThemesFlex,
{className:"relative",css:({ ["width"] : "80%" })},
jsx(LucidePaperclip,{className:"absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"},)
,jsx(Input_68140765256eac2ecbe2fa4aa3358d1a,{},)
,),jsx(Button_b93551df5d077fc9c2d889720946ec12,{},)
,),jsx(RadixThemesSeparator,{className:"my-8 border-t border-gray-700",css:({ ["width"] : "95%" }),size:"4"},)
,jsx(Fragment_8a889917dc32ab3ab3845f27121c8208,{},)
,),),),jsx(
"title",
{},
"\u94fe\u63a5\u8f6c\u6362"
,),jsx("meta",{content:"\u5c06github\u94fe\u63a5\u8f6c\u6362\u4e3aCDN\u94fe\u63a5",name:"description"},)
,jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}
