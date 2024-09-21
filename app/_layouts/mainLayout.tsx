
const MainLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <>
            <main className=" min-h-screen bg-background">
                {children}
            </main>
        </>
    )
}

export default MainLayout