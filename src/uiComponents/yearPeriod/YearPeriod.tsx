import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import gsap from 'gsap';
import './yearPeriod.scss';

type TYearPeriod = {
    year: number | null;
    classList?: string;
}

const YearPeriod: React.FC<TYearPeriod> = ({year, classList = ""}) => {
    const [displayYear, setDisplayYear] = useState(year);
    const tempYear = useRef({ currentValue: year });

    useEffect(() => {
        gsap.to(tempYear.current, {
            currentValue: year,
            duration: 1,
            onUpdate: () => {
                setDisplayYear(Math.round(tempYear.current.currentValue!));
            },
        });
    }, [year]);
    
    if (!year) {
        return (<div className={classNames("year-period", classList)}></div>)
    }
    
    return  (
        <div className={classNames("year-period", classList)}>
            {displayYear}
        </div>
    )
}

export default YearPeriod;
