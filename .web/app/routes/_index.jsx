

import { Fragment, useCallback, useContext, useEffect, useRef } from "react"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event, isNotNullOrUndefined, isTrue, refs } from "$/utils/state"
import { jsx } from "@emotion/react"



function Fragment_322357062189884031363925104239369906274 () {
  
  const reflex___state____state__get_cdn___get_cdn____index_state = useContext(StateContexts.reflex___state____state__get_cdn___get_cdn____index_state)





  
  return (
    jsx(
Fragment,
{},
(isTrue(reflex___state____state__get_cdn___get_cdn____index_state.cdn_urls_rx_state_) ? (jsx(
Fragment,
{},
jsx(Div_332363376365728000315143814043382749927,{},)
,)) : (jsx(Fragment,{},)
)),)
  )
}

function Div_186210750560418098615784508498108031509 () {
  
  const reflex___state____state__get_cdn___get_cdn____index_state = useContext(StateContexts.reflex___state____state__get_cdn___get_cdn____index_state)





  
  return (
    jsx(
"div",
{className:"grid grid-cols-1 md:grid-cols-3 gap-5 mt-8"},
reflex___state____state__get_cdn___get_cdn____index_state.features_box_data_rx_state_.map((item_rx_state_,index_69a023a20c371852)=>(jsx(
"div",
{className:"grid-cols-1 md:grid-cols-3 gap-5",key:index_69a023a20c371852},
jsx(
"div",
{className:"bg-white p-5 rounded-xl text-center shadow-sm transition-transform duration-200 hover:transform hover:-translate-y-2 hover:shadow-lg"},
jsx(
"div",
{className:"w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full flex items-center justify-center text-2xl text-white"},
item_rx_state_["icon"]
,),jsx(
"h3",
{className:"text-gray-800 mb-2 text-lg font-semibold"},
item_rx_state_["title"]
,),jsx(
"p",
{className:"text-gray-600 text-sm leading-relaxed"},
item_rx_state_["description"]
,),),))),)
  )
}

function Button_256471295167101190407681384809832228739 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_91929dd4f41f9a02118b1ab4d3a3f66d = useCallback(((_e) => (addEvents([(Event("reflex___state____state.get_cdn___get_cdn____index_state.get_transform_url", ({  }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
"button",
{className:"w-full p-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white border-none rounded-xl text-lg font-semibold cursor-pointer transition-all duration-300 relative overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-300 active:transform active:translate-y-0",onClick:on_click_91929dd4f41f9a02118b1ab4d3a3f66d},
"\ud83d\udd04 \u8f6c\u6362\u4e3a CDN \u94fe\u63a5"
,)
  )
}

function Button_13675875942214932748082912271665564502 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_928a6b6de1459192aee7b9d24d2448d5 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.get_cdn___get_cdn____index_state.clear_data", ({  }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
"button",
{className:"w-full p-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white border-none rounded-xl text-lg font-semibold cursor-pointer transition-all duration-300 relative overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-300 active:transform active:translate-y-0",onClick:on_click_928a6b6de1459192aee7b9d24d2448d5},
"\u26a0\ufe0f \u6e05\u9664\u6570\u636e"
,)
  )
}

function Div_332363376365728000315143814043382749927 () {
  
  const ref_output_section = useRef(null); refs["ref_output_section"] = ref_output_section;
  const reflex___state____state__get_cdn___get_cdn____index_state = useContext(StateContexts.reflex___state____state__get_cdn___get_cdn____index_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    jsx(
"div",
{className:"mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200",id:"output-section",ref:ref_output_section},
reflex___state____state__get_cdn___get_cdn____index_state.cdn_urls_rx_state_.map((item_rx_state_,index_3fc7a37f41d9f23d)=>(jsx(
"div",
{className:"mb-5 p-5 bg-white rounded-xl shadow-sm transition-transform duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg",key:index_3fc7a37f41d9f23d},
jsx(
"div",
{className:"text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wider flex items-center"},
jsx(
"span",
{className:"mr-2 text-lg"},
item_rx_state_["icon"]
,),item_rx_state_["name"]
,),jsx(
"div",
{className:"text-gray-800 font-mono text-sm break-all leading-relaxed bg-gray-50 p-3 rounded-lg border-l-4 border-indigo-400 relative"},
jsx(
"span",
{className:"text-gray-800 font-mono text-sm break-all leading-relaxed"},
item_rx_state_["url"]
,),jsx(
"button",
{className:"absolute top-3 right-3 bg-indigo-500 text-white border-none py-1 px-3 rounded-md text-xs cursor-pointer transition-all duration-200 hover:bg-indigo-600 hover:scale-105 active:scale-95",onClick:((_e) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"](item_rx_state_["url"]))), ["callback"] : null }), ({  })))], [_e], ({  }))))},
"\u590d\u5236"
,),),))),)
  )
}

function Input_58534130238363635077961526302513303557 () {
  
  const reflex___state____state__get_cdn___get_cdn____index_state = useContext(StateContexts.reflex___state____state__get_cdn___get_cdn____index_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_8041d6aeea165e3f89d9e3964fa474cf = useCallback(((_e) => (addEvents([(Event("reflex___state____state.get_cdn___get_cdn____index_state.set_github_url", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx("input",{className:"w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all duration-300 bg-white focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:transform focus:-translate-y-1",onChange:on_change_8041d6aeea165e3f89d9e3964fa474cf,placeholder:"https://github.com/username/repository/blob/main/file.js",type:"url",value:(isNotNullOrUndefined(reflex___state____state__get_cdn___get_cdn____index_state.github_url_rx_state_) ? reflex___state____state__get_cdn___get_cdn____index_state.github_url_rx_state_ : "")},)

  )
}

export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(
"div",
{className:"min-h-screen bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center p-5 "},
jsx(
"div",
{className:"animate-fadeInUp bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl shadow-2xl shadow-black/10 w-full max-w-4xl p-10 animate-fade-in-up"},
jsx(
Fragment,
{},
jsx(
"div",
{className:"text-center mb-10"},
jsx(
"h1",
{className:"text-4xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent"},
"\ud83d\ude80 GitHub CDN \u8f6c\u6362\u5de5\u5177"
,),jsx(
"p",
{className:"text-gray-600 text-lg text-center leading-relaxed"},
"\u5c06\u60a8\u7684 GitHub \u6587\u4ef6\u94fe\u63a5\u8f6c\u6362\u4e3a\u9ad8\u901f CDN \u9759\u6001\u8d44\u6e90\u94fe\u63a5\uff0c\u63d0\u5347\u8bbf\u95ee\u901f\u5ea6\u548c\u7a33\u5b9a\u6027"
,),),),jsx(
Fragment,
{},
jsx(
"div",
{className:"mb-8"},
jsx(
"div",
{className:"relative mb-5"},
jsx(
"label",
{className:"block text-gray-700 font-semibold mb-2 text-sm"},
"GitHub \u6587\u4ef6\u94fe\u63a5"
,),jsx(Input_58534130238363635077961526302513303557,{},)
,),jsx(
"div",
{className:"flex flex-row gap-4"},
jsx(Button_256471295167101190407681384809832228739,{},)
,jsx(Button_13675875942214932748082912271665564502,{},)
,),),),jsx(
Fragment,
{},
jsx(Fragment_322357062189884031363925104239369906274,{},)
,),jsx(Div_186210750560418098615784508498108031509,{},)
,),),jsx(
"title",
{},
"\u94fe\u63a5\u8f6c\u6362"
,),jsx("meta",{content:"\u5c06github\u94fe\u63a5\u8f6c\u6362\u4e3aCDN\u94fe\u63a5",name:"description"},)
,jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}
