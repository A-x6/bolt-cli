import { EventEmitter } from "events"
import { Identifier } from "@/id/id"

export type GlobalEvent = {
  directory?: string
  project?: string
  workspace?: string
  payload: any
}

class GlobalBusEmitter extends EventEmitter<{
  event: [GlobalEvent]
}> {
  override emit<E extends string | symbol>(
    eventName: "event" | E,
    ...args: E extends "event" ? [GlobalEvent] : any[]
  ): boolean {
    const base = super.emit as (eventName: string | symbol, ...args: unknown[]) => boolean
    if (eventName !== "event") return base(eventName, ...(args as unknown[]))
    const [event] = args
    if (event.payload && typeof event.payload === "object" && !("id" in event.payload)) {
      event.payload.id = event.payload.syncEvent?.id ?? Identifier.create("evt", "ascending")
    }
    return super.emit("event", event)
  }
}

export const GlobalBus = new GlobalBusEmitter()
