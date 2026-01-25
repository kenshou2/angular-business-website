export interface TestimonialData {
    id: number,
    reviewerName: string,
    reviewerOccupation?: string,
    rating: number,
    reviewerPfp: string | 'images/default-pfp.jpg',
    testimonialText: string,
}