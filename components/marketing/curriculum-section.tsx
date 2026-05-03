"use client"

import { curriculum } from "@/content/curriculum"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { BookOpen } from "lucide-react"

export function CurriculumSection() {
  return (
    <section id="curriculum" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-14 max-w-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            What you&apos;ll learn
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            32 lessons across 5 modules.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From AI fundamentals to team-wide rollout strategy. Every lesson is
            short, practical, and immediately applicable.
          </p>
        </div>

        <Accordion multiple={false}>
          {curriculum.map((module, i) => (
            <AccordionItem key={module.id} value={String(module.id)}>
              <AccordionTrigger className="py-5 text-sm">
                <span className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border bg-background font-mono text-xs font-semibold text-brand">
                    {i + 1}
                  </span>
                  <span className="flex flex-col gap-0.5 text-left">
                    <span className="font-medium text-foreground">
                      {module.title}
                    </span>
                    <span className="font-mono text-xs font-normal text-muted-foreground">
                      {module.lessonCount} lessons
                    </span>
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-10 pb-2">
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {module.description}
                  </p>
                  <ul className="space-y-2">
                    {module.lessons.map((lesson) => (
                      <li
                        key={lesson.title}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <BookOpen
                          size={13}
                          strokeWidth={1.5}
                          className="shrink-0 text-border"
                        />
                        {lesson.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
