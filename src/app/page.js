import Image from 'next/image';
import styles from './page.module.css';
import { revalidatePath, revalidateTag } from 'next/cache';
import { ColaboradorList } from './components/ColaboradorList';

async function getColaborador() {
    const response = await fetch(
        'https://dazzling-flame-563a188d67.strapiapp.com/api/colaboradors',
        {
            cache: 'no-store',
            method: 'GET',
        }
    );
    const data = await response.json();
    return data;
    setRefresh(!refresh);
}

async function deleteColaborador(id) {
    'use server';
    const response = await fetch(
        `https://dazzling-flame-563a188d67.strapiapp.com/api/colaboradors/${id}`,
        {
            method: 'DELETE',
        }
    );
    const data = await response.json();
    console.log(data);
    revalidatePath('/');
}
async function cesarColaborador(id, state) {
    'use server';
    const cesarColaborador = {
        data: {
            Cesado: !state,
        },
    };
    const response = await fetch(
        `https://dazzling-flame-563a188d67.strapiapp.com/api/colaboradors/${id}`,
        {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cesarColaborador),
        }
    );
    const data = await response.json();
    console.log(data);
    revalidatePath('/');
}

export default async function Home() {
    const colaboradores = await getColaborador();
    console.log(colaboradores);

    return (
        <main className={styles.main}>
            <h1>Colaboradores</h1>
            <div className={styles.ColaboradorTitle}>
                <h3>Nombres</h3>
                <h3>Apellidos</h3>
                <h3>Area</h3>
                <h3>Cargo</h3>
                <h3>Acciones</h3>
            </div>
            <ColaboradorList
                colaboradores={colaboradores}
                deleteColaborador={deleteColaborador}
                cesarColaborador={cesarColaborador}
            />
        </main>
    );
}
