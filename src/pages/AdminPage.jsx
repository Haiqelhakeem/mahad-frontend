const AdminPage = () => {
    return (
        <div className="flex justify-center items-center mt-28">
            <div className="w-96 border rounded bg-white px-7 py-10">
                <form onSubmit={() => { }}>
                    <h4 className="text-2xl mb-7">Login</h4>

                    <input
                        type="text"
                        placeholder="Bangkit Email"
                        className="input-box"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <PasswordInput
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />

                    {
                        error && <p className="text-red-500 text-xs pb-1">{error}</p>
                    }

                    <button type="submit" className="btn-primary">
                        Login
                    </button>

                    <p className="text-sm text-center mt-4">
                        Not registered yet?{" "}<Link to="/signup" className="font-medium text-primary underline">Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default AdminPage