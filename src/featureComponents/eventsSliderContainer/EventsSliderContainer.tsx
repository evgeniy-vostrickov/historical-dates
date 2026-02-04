import { useEffect, useRef } from "react";
import EventsSlider from "../eventsSlider/EventsSlider";
import { TPeriodEvents } from "../historicalDatesSection/HistoricalDatesSection";
import gsap from 'gsap';

type TEventsSliderContainer = {
    listEvents: TPeriodEvents[];
    isAnimated: boolean;
    periodName: string;
}

const EventsSliderContainer: React.FC<TEventsSliderContainer> = ({listEvents, isAnimated, periodName}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        if (isAnimated) {
            gsap.to(containerRef.current, {
                opacity: 0,
                y: 10,
                duration: 0.5
            });
        } else {
            gsap.fromTo(
                containerRef.current,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.5 }
            );
        }
    }, [isAnimated, listEvents]);

    return (
        <div ref={containerRef}>
            <EventsSlider listEvents={listEvents} />
            <div className="historical-dates__events-slider__period-name">{periodName}</div>
            <div className="historical-dates__events-slider__period-line"></div>
        </div>
    )
}

export default EventsSliderContainer;
