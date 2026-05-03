"use client"

import { curriculum } from "@/content/curriculum"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { BookOpen } from "lucide-react"
import { FadeIn } from "./fade-in"

export function CurriculumSection() {
  return (
    <section id="curriculum" className="bg-zinc-50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <FadeIn className="mb-14 max-w-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-sage">
            What you'll learn
          </p>
          <h2 className="font-heading text-3xl tracking-tight text-zinc-900 sm:text-4xl">
            32 lessons across 5 modules.
          </h2>
          <p className="mt-4 text-zinc-500 leading-relaxed">
            From AI fundamentals to team-wide rollout strategy. Every lesson is
            short, practical, and immediately applicable.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion multiple={false}>
            {curriculum.map((module, i) => (
              <AccordionItem key={module.id} value={String(module.id)}>
                <AccordionTrigger className="py-5 text-base">
                  <span className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-50 text-xs font-semibold text-sage ring-1 ring-sage/20">
                      {i + 1}
                    </span>
                    <span className="flex flex-col gap-0.5 text-left">
                      <span className="font-medium text-zinc-900">
                        {module.title}
                      </span>
                      <span className="text-xs font-normal text-zinc-400">
                        {module.lessonCount} lessons
                      </span>
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-10 pb-2">
                    <p className="mb-4 text-sm text-zinc-500">
                      {module.description}
                    </p>
                    <ul className="space-y-2">
                      {module.lessons.map((lesson) => (
                        <li
                          key={lesson.title}
                          className="flex items-center gap-2 text-sm text-zinc-600"
                        >
                          <BookOpen
                            size={13}
                            className="shrink-0 text-zinc-300"
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
        </FadeIn>
      </div>
    </section>
  )
}
