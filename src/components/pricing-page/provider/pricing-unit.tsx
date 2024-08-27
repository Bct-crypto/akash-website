import React, { useEffect } from "react";
import { Slider } from "@/components/ui/slider";

type PricingUnitProps = {
    progress: number;
    setProgress: React.Dispatch<React.SetStateAction<number>>;
    max: number;
    title: string;
    content: string;
    position?: string;
    suffix?: string;
    step?: number;
    flag?: boolean;
}

function PricingUnit({ title, content, position, progress, setProgress, max, suffix, step = 1, flag }: PricingUnitProps) {

    useEffect(() => {
        if (!progress) {
            setProgress(0);
        }
    }, [progress])

    return (
        <div className="flex flex-col space-x-4 justify-between gap-4 md:gap-5 w-full">
            <div className={`lg:flex lg:justify-between space-x-2 ${position ? position : 'items-start'}`}>
                <div className="">
                    <p className="font-semibold text-foreground whitespace-nowrap md:whitespace-normal">
                        {title}
                    </p>
                    <p className="font-medium text-sm md:text-base whitespace-nowrap md:whitespace-normal">
                        {content}
                    </p>
                </div>
                <input
                    className="rounded-md border w-[63px] md:w-[90px] mt-4 py-1.5 px-1 md:px-3 shadow-sm bg-transparent font-bold text-foreground focus:outline-primary dark:outline-none"
                    value={flag ? `${progress} ${suffix}` : `${progress}`}
                    onChange={(e) => { setProgress(parseInt(e.target.value)) }}
                />
            </div>
            <div className="relative w-full md:py-5 space-x-2">
                <Slider
                    defaultValue={[progress]}
                    value={[progress]}
                    max={max}
                    step={step}
                    className={"w-[100%] z-10"}
                    onValueChange={(value) => setProgress(value[0])}
                    sliderLabel={suffix ? `${progress} ${suffix}` : `${progress}`}
                    draggable
                />
            </div>
        </div>
    );
}

export default PricingUnit;
