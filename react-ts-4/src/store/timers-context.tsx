import { type ReactNode, createContext, useContext, useReducer } from 'react';

export type Timer = {
    name: string;
    duration: number;
};

type TimersState = {
    isRunning: boolean;
    timers: Timer[];
};

const initialState: TimersState = {
    isRunning: true,
    timers: []
};


type TimerContextValue = TimersState & {
    addTimer: (timerDate: Timer) => void,
    startTimers: () => void,
    stopTimers: () => void
};

const TimersContext = createContext<TimerContextValue | null>(null);

export function useTimersContext() {
    const timersContext = useContext(TimersContext);

    if (timersContext === null) {
        throw new Error("Timers context is null and that should not be the case.");
    }

    return timersContext;
}


type TimersContextProviderProps = {
    children: ReactNode;

};

type StartTimerAction = {
    type: 'START_TIMERS';
};

type StopTimerAction = {
    type: 'STOP_TIMERS';
};


type AddTimerAction = {
    type: 'ADD_TIMER';
    payload: Timer;
};
type Action = StartTimerAction | StopTimerAction | AddTimerAction;

function timersReducer(state: TimersState, action: Action): TimersState {
    if (action.type === 'START_TIMERS') {
        return {
            ...state,
            isRunning: true
        };
    }
    if (action.type === 'STOP_TIMERS') {
        return {
            ...state,
            isRunning: false
        };
    }

    if (action.type === 'ADD_TIMER') {
        return {
            ...state,
            timers: [...state.timers, { name: action.payload.name, duration: action.payload.duration }]
        };
    }
    return state;
}

export default function TimerContextProvider({ children }: TimersContextProviderProps) {

    const [timersState, dispatch] = useReducer(timersReducer, initialState);



    const context: TimerContextValue = {
        timers: timersState.timers,
        isRunning: timersState.isRunning,
        addTimer(timerDate) {
            dispatch({
                type: 'ADD_TIMER',
                payload: timerDate
            });
        },
        startTimers() {
            dispatch({
                type: 'START_TIMERS'
            });
        },
        stopTimers() {
            dispatch({
                type: 'STOP_TIMERS'
            });
        },
    };

    return <TimersContext.Provider value={context}>
        {children}
    </TimersContext.Provider>;
}