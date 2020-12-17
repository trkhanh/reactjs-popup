
import { useLayoutEffect,RefObject, useEffect} from "react";

export const useOnEscape = (handler: ()=> void, active =true){
    useEffect(()=>{
        if(!active) return;
        
        const listener = (event: any)=>{
            if(event.key === 'Escape') handler();
        }

        document.addEventListener('keyup', listener)

        return ()=>{
            if(!active) return;
            document.removeEventListener('keyup',listener)
        }
    }, [handler, active])
};