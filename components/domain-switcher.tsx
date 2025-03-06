"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Globe } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { siteConfig } from "@/config/site"

export function DomainSwitcher({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(siteConfig.domains[0].name)

  return (
    <div className={cn("flex items-center space-x-4", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" aria-expanded={open} className="w-[240px] justify-between">
            <Globe className="mr-2 h-4 w-4" />
            {value}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[240px] p-0">
          <Command>
            <CommandInput placeholder="Search domain..." />
            <CommandList>
              <CommandEmpty>No domain found.</CommandEmpty>
              <CommandGroup>
                {siteConfig.domains.map((domain) => (
                  <CommandItem
                    key={domain.name}
                    value={domain.name}
                    onSelect={(currentValue) => {
                      setValue(currentValue)
                      setOpen(false)
                      window.location.href = domain.url
                    }}
                  >
                    <Check className={cn("mr-2 h-4 w-4", value === domain.name ? "opacity-100" : "opacity-0")} />
                    {domain.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

