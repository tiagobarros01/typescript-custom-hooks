import { useEffect, useLayoutEffect, useRef } from "react";

type UseEventListenerOptions = {
  enabled?: boolean;
  target?: GlobalEventHandlers;
};

type UseEventListenerHook = <EventType extends keyof GlobalEventHandlersEventMap> (
  eventType: EventType,
  handler: (event: GlobalEventHandlersEventMap[EventType]) => void,
  options?: UseEventListenerOptions
) => void;

const defaultOptions: UseEventListenerOptions = {
  enabled: true,
  target: document,
};

export const useEventListener: UseEventListenerHook = (
  eventType,
  handler,
  options = defaultOptions
) => {
  const { enabled = true, target = document } = options;

  const handlerRef = useRef(handler);

  useLayoutEffect(() => {
    handlerRef.current = handler
  });

  useEffect(() => {
    if (!enabled) {
      return () => null;
    }

    const eventHandler: typeof handlerRef.current = (event) => {
      handlerRef.current.call(target, event);
    }

    target.addEventListener(eventType, eventHandler);
    
    return () => {
      target.removeEventListener(eventType, eventHandler);
    }
  }, [eventType, target, enabled])
};
