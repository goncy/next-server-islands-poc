'use client'

import { useEffect, useState, cloneElement } from "react";

export default function Lazy<P>({children = null, component: Component, ...props}: P & {children?: React.ReactElement, component: (props: P) => Promise<React.ReactElement>}) {
  const [payload, setPayload] = useState<React.ReactElement>()

  useEffect(() => {
    // Get the RSC payload from a route handler
    Component(props as P).then(setPayload)
  }, [])

  if (!payload) return children

  return cloneElement(payload)
}
