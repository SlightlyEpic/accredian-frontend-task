function ReferPage() {
    return (
        <div className='flex flex-col'>
            {new Array(50).fill(0).map((v, i) => <div key={i}>{i}</div>)}
        </div>
    );
}

export default ReferPage;
