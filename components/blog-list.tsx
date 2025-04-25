import Link from "next/link"
import type { BlogPost } from "@/lib/get-content"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function BlogList({ posts, lang }: { posts: BlogPost[]; lang: string }) {
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <Card
          key={post.slug}
          className="overflow-hidden border-border/40 group hover:border-primary/20 transition-all duration-300"
        >
          <Link href={`/${lang}/blog/${post.slug}`} className="block h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl tracking-tight group-hover:text-primary transition-colors">
                {post.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString(lang === "en" ? "en-US" : "es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground flex items-center pt-0">
              <span className="flex items-center group-hover:text-primary transition-colors">
                {lang === "en" ? "Read more" : "Leer más"}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </div>
  )
}
