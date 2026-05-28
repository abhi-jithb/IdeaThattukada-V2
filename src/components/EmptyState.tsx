type EmptyStateProps = {
    title: string;
    subtitle: string;
};

function EmptyState({title, subtitle} : EmptyStateProps)
{
    return(
        <section className="empty-state">
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </section>
    )
}
export default EmptyState