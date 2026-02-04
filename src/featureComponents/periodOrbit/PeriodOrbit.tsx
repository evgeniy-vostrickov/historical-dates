import { useLayoutEffect, useRef, useState } from 'react';
import { ANGLE_360, BASE_INDENTATION } from '@/const/mathematicalValues';
import { TPeriod } from '@/featureComponents/historicalDatesSection/HistoricalDatesSection';
import RoundContainer from '@/uiComponents/roundContainer/RoundContainer';
import SwitchPeriod from '@/featureComponents/switchPeriod/SwitchPeriod';
import gsap from 'gsap';
import classNames from 'classnames';
import './periodOrbit.scss';

export type TDirectionRotation = 'right' | 'left'

type TPeriodOrbit = {
    periods: TPeriod[];
    activePeriodId: number | null;
    onChangeCurrentPeriodId: (newPeriodId: number | null) => void;
    isRunningAnimation: boolean;
    onChangeIsRunningAnimation: (isAnimated: boolean) => void;
}

const PeriodOrbit: React.FC<TPeriodOrbit> = ({periods, activePeriodId, onChangeCurrentPeriodId, isRunningAnimation, onChangeIsRunningAnimation}) => {
    const [viewedPeriodId, setViewedPeriodId] = useState<number | null>(null);
    const orbit = useRef<HTMLDivElement>(null);
    const currentOrbitAngle = useRef(0);
    const currentPeriodIndex = useRef(0);

    const onChangePeriod = (directionRotation: TDirectionRotation) => {
        const newIndex = directionRotation === 'right' ? currentPeriodIndex.current + 1 : currentPeriodIndex.current - 1;
        onClickSatellite(periods[newIndex].id, newIndex)
    }
    
    const onClickSatellite = (selectedPeriodId: number, index: number) => {
        onChangeIsRunningAnimation(true);
        onChangeCurrentPeriodId(selectedPeriodId);
        currentPeriodIndex.current = index;
        const orbitRotationAgle = (ANGLE_360 / periods.length) * (periods.length - index);
        
        gsap.to(orbit.current, {
            rotation: orbitRotationAgle,
            duration: 1,
            onComplete: () => {
                onChangeIsRunningAnimation(false);
                setViewedPeriodId(null);
                currentOrbitAngle.current = orbitRotationAgle;
            },
        });

        const selectorFuncOrbit = gsap.utils.selector(orbit);
        const satelliteContainers = selectorFuncOrbit(".orbit__satellites__container");
        satelliteContainers.forEach(satelliteContainer => {
            gsap.to(satelliteContainer, {
                rotation: `-=${orbitRotationAgle - currentOrbitAngle.current}`,
                duration: 1,
            });
        });
    }
    
    useLayoutEffect(() => {
        const {width: orbitalDiameter} = orbit.current!.getBoundingClientRect();
        const satellites = gsap.utils.toArray<HTMLElement>('.orbit__satellites');
        let satelliteRotationAgle = 0;
        
        satellites.forEach((satellite, index) => {
            let selectorFuncSatellite = gsap.utils.selector(satellite);
            satelliteRotationAgle = (ANGLE_360 / periods.length) * index - BASE_INDENTATION;
            gsap.to(satellite, {
                rotation: satelliteRotationAgle,
                transformOrigin: `-${orbitalDiameter / 2}px 50%`,
            });
            gsap.to(selectorFuncSatellite(".orbit__satellites__container"), {
                rotation: -satelliteRotationAgle,
            });
        })
    }, [])

    return (
        <>
            <div ref={orbit} className="orbit">
                {
                    periods.map((period, index) => {
                        const {id: periodId, periodName} = period;
                        const isHoveredPeriod = viewedPeriodId === periodId;
                        const isActivedPeriod = activePeriodId === periodId;
                        
                        const isShowedPeriodId = isHoveredPeriod || isActivedPeriod;
                        const isShowedPeriodName = !isRunningAnimation && isActivedPeriod;
                        
                        return (
                            <div 
                                key={periodId}
                                className={classNames("orbit__satellites")}
                                onMouseEnter={() => setViewedPeriodId(periodId)}
                                onMouseLeave={() => !isRunningAnimation && setViewedPeriodId(null)}
                                onClick={() => onClickSatellite(periodId, index)}
                            >
                                <RoundContainer containerClassName={
                                    classNames("orbit__satellites__container", {
                                        "orbit__satellites__container_active": isShowedPeriodId
                                    })
                                }>
                                    {isShowedPeriodId && <span className="orbit__satellites__content">{index + 1}</span>}
                                    {isShowedPeriodName && <div className="orbit__satellites__label">{periodName}</div>}
                                </RoundContainer>
                            </div>
                        )
                    })
                }
            </div>
            <SwitchPeriod currentPeriodIndex={currentPeriodIndex.current + 1} totalPeriod={periods.length} isLoading={isRunningAnimation} onChangePeriod={onChangePeriod} />
        </>
    )
};

export default PeriodOrbit;
