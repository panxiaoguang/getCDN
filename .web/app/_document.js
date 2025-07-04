

import { Links, Meta, Scripts, ScrollRestoration } from "react-router"
import { jsx } from "@emotion/react"
import { Fragment, useEffect } from "react"



export function Layout({children}) {
  return (
    jsx(
"html",
{lang:"en"},
jsx(
"head",
{},
jsx("meta",{charSet:"utf-8"},)
,jsx("meta",{content:"width=device-width, initial-scale=1",name:"viewport"},)
,jsx(Meta,{},)
,jsx(Links,{},)
,),jsx(
"body",
{},
children
,jsx(ScrollRestoration,{},)
,jsx(Scripts,{},)
,),)
  )
}
