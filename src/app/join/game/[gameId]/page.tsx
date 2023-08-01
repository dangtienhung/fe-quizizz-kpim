'use client';

import GameSolo from './components/GameSolo';
import Summary from './components/Summary';
import { useSearchParams } from 'next/navigation';

enum GameType {
	SOLO = 'solo',
	SUMMARY = 'summary',
}

export default function QuizizzGame({
	params,
}: {
	params: { gameId: string };
}) {
	const searchParams = useSearchParams();

	const type = searchParams.get('type');

	if (type === GameType.SOLO || !type) {
		return <GameSolo />;
	} else if (type === GameType.SUMMARY) {
		return <Summary />;
	}
}
