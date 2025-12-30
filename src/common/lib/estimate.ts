import { Estimate, EstimateSection } from "@/data"

export function calculateSectionTotal(
	estimate: Estimate,
	section: EstimateSection
): number {
	const sectionRows = estimate.rows.filter(
		(row) => row.sectionId === section.id
	)
	return sectionRows.reduce(
		(total, row) => total + row.price * row.quantity,
		0
	)
}

export function calculateEstimateTotal(estimate: Estimate): number {
	return estimate.rows.reduce(
		(total, row) => total + row.price * row.quantity,
		0
	)
}
