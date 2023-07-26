import QuizizzList from '../quizizzes-lists/QuizizzList';
import React from 'react';

interface FeatureQuizizzProps {
	children?: React.ReactNode;
	className?: string;
}

export default function FeatureQuizizz({
	children,
	className,
}: FeatureQuizizzProps) {
	return (
		<div className={`p-4 md:p-7 ${className}`}>
			<QuizizzList />
			<QuizizzList />
			<QuizizzList />
		</div>
	);
}
