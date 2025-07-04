

import { Fragment, useEffect } from "react"
import { isTrue } from "$/utils/state"
import { useClientSideRouting } from "$/utils/client_side_routing"
import { jsx } from "@emotion/react"



function Fragment_02084d104a3581e47e770d3e4a7d1f76 () {
  

  const routeNotFound = useClientSideRouting()




  
  return (
    jsx(
Fragment,
{},
(isTrue(routeNotFound) ? (jsx(
Fragment,
{},
jsx(
"span",
{},
"404: Page not found"
,),)) : (jsx(
Fragment,
{},
))),)
  )
}

export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(Fragment_02084d104a3581e47e770d3e4a7d1f76,{},)
,jsx(
"title",
{},
"404 - Not Found"
,),jsx("meta",{content:"The page was not found",name:"description"},)
,jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}
