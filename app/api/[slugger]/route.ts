export async function GET(request: Request, { params }: { params: { slugger: string }}) {
    return Response.json(
        params.slugger
    )
}

export async function PUT(request: Request) {
    return Response.json(
        "PUT"
    )
}

export async function POST(request: Request) {
    return Response.json(
        "POST"
    )
}

export async function DELETE(request: Request) {
    return Response.json(
        "DELETE"
    )
}
