import React from "react";
import QuizizzList from "../quizizzes-lists/QuizizzList";

interface FeatureQuizizzProps {
	children?: React.ReactNode;
}

export default function FeatureQuizizz({ children }: FeatureQuizizzProps) {
	return (
		<div className="p-4 md:p-7">
			<QuizizzList />
			<QuizizzList />
			<QuizizzList />
		</div>
	);
}
