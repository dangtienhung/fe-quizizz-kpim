/* eslint-disable @next/next/no-img-element */
import LayoutDefault from "../../layouts/LayoutDefault";
import React from "react";
import ActionableContent from "@/app/components/actionable-content/ActionableContent";
import FeatureQuizizz from "@/app/components/featured-quizizzs/FeatureQuizizz";

export default function HomePage() {
	return (
		<>
			<LayoutDefault>
				<ActionableContent />
				<FeatureQuizizz />
			</LayoutDefault>
		</>
	);
}
