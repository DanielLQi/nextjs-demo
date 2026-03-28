export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <div>
            <h1>Showing details for user number #{id}</h1>
        </div>
    );
}