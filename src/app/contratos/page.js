import Image from 'next/image';
import styles from '../page.module.css';
import { revalidatePath, revalidateTag } from 'next/cache';
import { ColaboradorList } from '../components/ColaboradorList';
import { ContratoList } from '../components/ContratoList';

async function getContrato() {
    const response = await fetch(
        'https://dazzling-flame-563a188d67.strapiapp.com/api/contratoes',
        {
            cache: 'no-store',
            method: 'GET',
        }
    );
    const data = await response.json();
    return data;
    setRefresh(!refresh);
}

async function deleteContrato(id) {
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
async function crearColaborador(opciones) {
    'use server';
    const response = await fetch(
        `https://dazzling-flame-563a188d67.strapiapp.com/api/colaboradors/${id}`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(opciones),
        }
    );
    const data = await response.json();
    console.log(data);
    revalidatePath('/');
}

export default async function Contratos() {
    const contratos = await getContrato();

    return (
        <main className={styles.main}>
            <h1>Contratos</h1>
            <div className={styles.ColaboradorTitle}>
                <h3>Número</h3>
                <h3>EPS</h3>
                <h3>Seguro</h3>
                <h3>Días Libres</h3>
                <h3>Acciones</h3>
            </div>
            <ContratoList contratos={contratos} />
        </main>
    );
}
