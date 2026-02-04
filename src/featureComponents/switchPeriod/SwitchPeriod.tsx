import RoundContainer from '@/uiComponents/roundContainer/RoundContainer';
import ArrowIcon from '@/assets/icons/arrow.svg';
import { convertPeriodToString } from '@/helpers/convertPeriodToString';
import { TDirectionRotation } from '../periodOrbit/PeriodOrbit';
import './switchPeriod.scss';
import classNames from 'classnames';

type TSwitchPeriod = {
    currentPeriodIndex: number;
    totalPeriod: number;
    isLoading: boolean;
    onChangePeriod: (directionRotation: TDirectionRotation) => void;
    classList?: string;
}

const SwitchPeriod: React.FC<TSwitchPeriod> = ({currentPeriodIndex, totalPeriod, isLoading, onChangePeriod, classList=""}) => {
    const isDisabledNext = currentPeriodIndex === totalPeriod || isLoading
    const isDisabledPrev = currentPeriodIndex === 1 || isLoading
    
    return (
        <div className={classNames("switch-period", classList)}>
            <div className="switch-period__pagination">
                {convertPeriodToString(currentPeriodIndex ?? 0)}/{convertPeriodToString(totalPeriod)}
            </div>
            <RoundContainer 
                containerClassName={classNames("switch-period__prev", {"switch-period__navigation_disabled": isDisabledPrev})}
                onClickButton={() => !isDisabledPrev && onChangePeriod('left')}
            >
                <ArrowIcon className="switch-period__navigation__icon" />
            </RoundContainer>
            <RoundContainer 
                containerClassName={classNames("switch-period__next", {"switch-period__navigation_disabled": isDisabledNext})}
                onClickButton={() => !isDisabledNext && onChangePeriod('right')}    
            >
                <ArrowIcon className="switch-period__navigation__icon" />
            </RoundContainer>
        </div>
    )
}

export default SwitchPeriod;
