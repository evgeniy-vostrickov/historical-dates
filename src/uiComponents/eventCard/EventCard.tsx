import './eventCard.scss';

type TEventCard = {
    eventYear: number;
    eventDescription: string;
}

const EventCard: React.FC<TEventCard> = ({eventYear, eventDescription}) => {
    return (
        <article className="event-card">
            <h3 className="event-card__title">{eventYear}</h3>
            <div className="event-card__description">{eventDescription}</div>
        </article>
    )
}

export default EventCard;
