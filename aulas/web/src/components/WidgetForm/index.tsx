import { CloseButton } from "../CloseButton";

import BugImageUrl from "../../assets/Bug.svg";
import IdeaImageUrl from "../../assets/Idea.svg";
import ThoughtImageUrl from "../../assets/Thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedBackContentStep } from './Steps/FeedbackContentStep';

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: BugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: IdeaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: ThoughtImageUrl,
            alt: 'Imagem de um balão de pensamentos'
        }
    }
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    function handleRestartFeedback() {
        setFeedbackType(null);
    }


    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <FeedBackContentStep 
                    feedbackType={feedbackType}
                    onFeedbackRestartResquested={handleRestartFeedback}
                />
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>

        </div>
    );
}