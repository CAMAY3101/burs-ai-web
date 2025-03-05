import React, { useState } from 'react';
import { useAdminGetAllUsers,
    // useAdminDeleteUser,
    useAdminUpdateEtapaRegistro } from '../../hooks/useQueryHooks';
import { Button } from "@heroui/react";

const etapasRegistroPosibles = [
    "ingresar datos",
    "verificar correo",
    "verificar telefono",
    "verificar identidad",
    "simulacion modelos",
    "completado",
];

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    // Obtener la lista de usuarios
    const { isLoading, isError } = useAdminGetAllUsers(
        (response) => setUsuarios(response.data.users),
        (error) => console.error('Error al obtener los usuarios:', error)
    );

    // Función para eliminar un usuario
    // const deleteUserMutation = useAdminDeleteUser(
    //     () => console.log('Usuario eliminado con éxito'),
    //     (error) => console.error('Error al eliminar el usuario:', error)
    // );

    // Función para actualizar la etapa de registro
    const updateEtapaRegistroMutation = useAdminUpdateEtapaRegistro(
        () => console.log('Etapa de registro actualizada con éxito'),
        (error) => console.error('Error al actualizar la etapa de registro:', error)
    );

    // const handleDeleteUser = (uuid) => {
    //     deleteUserMutation.mutate(uuid);
    //     setUsuarios((prevUsuarios) => prevUsuarios.filter(user => user.uuid_client !== uuid));
    // };

    const handleUpdateEtapaRegistro = (uuid, nuevaEtapa) => {
        updateEtapaRegistroMutation.mutate({ uuid, etapa_registro: nuevaEtapa });
        // Actualizamos el estado local
        setUsuarios((prevUsuarios) =>
            prevUsuarios.map((user) =>
                user.uuid_client === uuid ? { ...user, etapa_registro: nuevaEtapa } : user
            )
        );
    };

    if (isLoading) return <div>Cargando...</div>;
    if (isError) return <div>Error al cargar los usuarios</div>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Administración de Usuarios</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Nombre
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Correo
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Teléfono
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Etapa de Registro
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {usuarios.map((user) => (
                            <tr key={user.uuid_client}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {user.nombre} {user.apellidos}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {user.correo}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {user.telefono}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {user.etapa_registro}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                    <select
                                        value={user.etapa_registro}
                                        onChange={(e) => handleUpdateEtapaRegistro(user.uuid_client, e.target.value)}
                                        className="p-2 border border-gray-300 rounded"
                                    >
                                        {etapasRegistroPosibles.map((etapa) => (
                                            <option key={etapa} value={etapa}>
                                                {etapa}
                                            </option>
                                        ))}
                                    </select>
                                    <Button
                                        onClick={
                                            () => {
                                                //handleDeleteUser(user.uuid_client)
                                                }
                                        }
                                        color="red"
                                    >
                                        Eliminar
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Usuarios;
