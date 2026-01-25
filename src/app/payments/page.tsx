import { columns, Payment } from "./columns"
import { DataTable } from "./data-table";

const getData = async (): Promise<Payment[]> => {
    return [
        {
            id: "723e834",
            amount: 134,
            status: "success",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "success",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "failed",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "pending",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "failed",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "processing",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "success",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "success",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "pending",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "processing",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "failed",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "pending",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "processing",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "pending",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "pending",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "success",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "success",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "success",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "failed",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "pending",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "failed",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "pending",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "success",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "success",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "pending",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "processing",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "failed",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "pending",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "failed",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "pending",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "success",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "success",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "pending",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "success",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "failed",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
        {
            id: "723e834",
            amount: 134,
            status: "processing",
            username: "John Doe",
            email: "johndoe@gmail.com"
        },
    ]
}

const PaymentPage = async () => {
    const data = await getData();
    return (
        <div>
            <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
                <h1 className="font-semibold">All Payments</h1>
            </div>
            <DataTable columns={columns} data={data}/>
        </div>
    )
}

export default PaymentPage
