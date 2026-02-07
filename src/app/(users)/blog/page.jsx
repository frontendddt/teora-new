
import { Suspense } from "react";
import BlogClient from "./component/BlogClient";
export const dynamic = "force-dynamic"

export default function BlogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogClient />
    </Suspense>
  )
}


 