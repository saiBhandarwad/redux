import { increment, useAddAccountMutation, useDeleteAccountMutation, useGetAccountsQuery } from '../slices/adminSlice'
export default function Admin() {
    const { data, error, isLoading } = useGetAccountsQuery()
    const [addAccount, response] = useAddAccountMutation()
    const [deleteAccount] = useDeleteAccountMutation()
    return (
        <>
            <h2 className='main_heading justify_center'> Admin Component </h2>
            {data && data.map((curElem) => <p className='justify_center yellow' >{curElem.id} : {curElem.amount}
                <button className='ms-2' onClick={() => deleteAccount(curElem.id)}>delete account</button>
            </p>)}
            <div className='justify_center' >
                <button onClick={(data) => addAccount(1000, data.length + 1)}>add account</button>
            </div>

        </>
    )
}
