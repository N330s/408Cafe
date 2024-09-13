export default function Members({ params }: { params: { name: string }}) {
    return (
        <div>
            member : {params.name[0]}
        </div>
    )
}