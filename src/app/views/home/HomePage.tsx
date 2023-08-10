/* eslint-disable @next/next/no-img-element */

import ActionableContent from '@/app/components/actionable-content/ActionableContent';
import FeatureQuizizz from '@/app/components/featured-quizizzs/FeatureQuizizz';
import LayoutDefault from '../../layouts/LayoutDefault';
import React from 'react';
import { ToastContainer } from 'react-toastify';

export default function HomePage() {
	return (
		<>
			<LayoutDefault>
				<ActionableContent />
				<FeatureQuizizz />
			</LayoutDefault>
			<ToastContainer />
		</>
	);
}
