import Layout from "./Layout";

export default function Albums(){
    return (
        <Layout>
            <div className="albums-container">
                <div className="subtitle">
                    <h1>Title</h1>
                </div>
                <div className="albums">
                    <div className="album">
                        This is an album
                    </div>
                </div>
            </div>
        </Layout>
    );
}