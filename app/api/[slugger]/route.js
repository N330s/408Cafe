export async function GET(request, {params}) {
    return Response.json(
        params.slugger
    )
}

export async function PUT(request, {params}) {
    return Response.json(
        "PUT"
    )
}

export async function POST(request, {params}) {
    return Response.json(
        "POST"
    )
}

export async function DELETE(request, {params}) {
    return Response.json(
        "DELETE"
    )
}
