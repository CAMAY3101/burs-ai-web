import { React, useState } from 'react';
import { Button, Input, Accordion, AccordionItem } from "@heroui/react";

import axios from 'axios';

function ResultadosModelos() {
    const [egresos, setEgresos] = useState('');
    const [montoSolicitado, setMontoSolicitado] = useState('');
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    async function handleSubmit() {
        try {
            const response = await axios.get('https://api.burs.com.mx/modelos/getAllValuesModels', {
                params: {
                    expenses: egresos,
                    monto_solicitado: montoSolicitado,
                }
            });

            if (response.data.status === 'success') {
                console.log('egresos:', typeof (egresos));
                console.log('montoSolicitado:', typeof (montoSolicitado));
                console.log('Response:', response.data.results);
                setResults(response.data.results);
                setShowResults(true);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div className=' flex flex-col space-y-3'>
            <Input
                type="number"
                label="Egresos mensuales"
                placeholder='Ejemplo: $15000'
                variant='bordered'
                labelPlacement='inside'
                size='md'
                value={egresos}
                onValueChange={setEgresos}
            />
            <Input
                type="number"
                label="Monto solicitado"
                placeholder='Ejemplo: $10000'
                variant='bordered'
                labelPlacement='inside'
                size='md'
                value={montoSolicitado}
                onValueChange={setMontoSolicitado}
            />
            <Button onClick={handleSubmit}>Calcular</Button>
            {showResults && (
                <Accordion>
                    <AccordionItem key="1" aria-label="Capacidad de pago diario" title="Capacidad de pago diario">
                        <div>
                            <p>Capacidad de pago total = ingresos - egresos</p>
                            <p>Capacidad de pago total = {results.ingresos} - {egresos}</p>
                            <p>Capacidad de pago total = {results.CapacidadPagoDiario.CapacidadDePagoTotal}</p>

                            <p>Capacidad de pago diaria = capacidad de pago total / plazo de días</p>
                            <p>Capacidad de pago diaria = {results.CapacidadPagoDiario.CapacidadDePagoTotal} / {results.plazoMaxDias}</p>
                            <p>Capacidad de pago diaria = {results.CapacidadPagoDiario.CapacidadDePagoDiario}</p>
                        </div>
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Cálculo de días de crédito" title="Cálculo de días de crédito">
                        <div>
                            <p>Factor de multiplicación diario = 1 + (Tasa de interés diaria * días)</p>
                            <p>Factor de multiplicación diario = 1 + ({results.tazaInteres} * {results.plazoMaxDias})</p>
                            <p>Factor de multiplicación diario = {results.CapacidadDeDiasDeCredito.FactorDeMultiplicacionDiario}</p>
                        </div>
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Monto máximo de préstamo" title="Monto máximo de préstamo">
                        <div>
                            <p>Total a pagar = Capacidad de Pago Diario * Plazo maximo en dias</p>
                            <p>Total a pagar = {results.CapacidadPagoDiario.CapacidadDePagoDiario} * {results.plazoMaxDias}</p>
                            <p>Total a pagar = {results.CapacidadDeDiasDeCredito.TotalPagar}</p>
                            <p>Monto Maximo del Prestamo = Total a Pagar / Factor de Multiplicación Diario</p>
                            <p>Monto Maximo del Prestamo = {results.CapacidadDeDiasDeCredito.TotalPagar} / {results.CapacidadDeDiasDeCredito.FactorDeMultiplicacionDiario}</p>
                            <p>Monto Maximo del Prestamo = {results.CapacidadDeDiasDeCredito.MontoMaximoDePrestamo}</p>
                        </div>
                    </AccordionItem>
                    <AccordionItem key="4" aria-label="Modelo de Evaluación de capacidad de pago" title="Modelo de Evaluación de capacidad de pago">
                        <div>
                            <p>Ingresos mensuales netos: {results.ingresos} ({results.calculoCapacidadPago.puntajeIngresos} puntos)</p>
                            <p>Egresos Mensuales: {egresos} ({results.calculoCapacidadPago.puntajeEgresos} puntos)</p>
                            <p>Relación deuda ingreso: {results.calculoCapacidadPago.deuda} ({results.calculoCapacidadPago.puntajeRelacionDeudaIngreso} puntos)</p>
                            <p>Total de puntos acumulados: {results.calculoCapacidadPago.puntuacion} </p>
                        </div>
                    </AccordionItem>
                    <AccordionItem key="5" aria-label="Parámetro de días de pago" title="Parámetro de días de pago">
                        <div>
                            <h4>Paso 1: Calcular pago diario Incluyendo Intereses</h4>
                            <p>Interés diario = Monto Solicitado * Tasa de interés diaria</p>
                            <p>Interés diario = {montoSolicitado} * {results.tazaInteres}</p>
                            <p>Interés diario = {results.ParametroDiasDePago.interesDiario}</p>
                            <p>Pago Diario Total = Monto solicitado * (1 + Tasa de interés diaria)</p>
                            <p>Pago Diario Total = {montoSolicitado} * (1 + {results.tazaInteres})</p>
                            <p>Pago Diario Total = {results.ParametroDiasDePago.pagoDiarioTotal}</p>
                            <p>Pago Diario = Pago Diario Total / número de días</p>


                            <h4>Paso 2: Determinar el número de días</h4>
                            <p>Número de días = Pago diario / 300</p>
                            <p>Número de días = {results.ParametroDiasDePago.pagoDiarioTotal} / 300</p>
                            <p>Número de días = {results.ParametroDiasDePago.numeroDeDias}</p>

                            <p>Pago Diario = Pago Diario Total / número de días</p>
                            <p>Pago Diario = {results.ParametroDiasDePago.pagoDiarioTotal} / {results.ParametroDiasDePago.numeroDeDias}</p>
                            <p>Pago Diario = {results.ParametroDiasDePago.pagoDiario}</p>
                        </div>
                    </AccordionItem>
                    <AccordionItem key="6" aria-label="Modelo Integral de Evaluación de Capacidad de Pago y Riesgo Crediticio" title="Modelo Integral de Evaluación de Capacidad de Pago y Riesgo Crediticio">
                        <div>
                            <p>Tipo de vivienda: 5 puntos</p>
                            <p>Datos Personales verificados: 5 puntos</p>
                            <p>Validación biométrica: 5 puntos</p>
                            <p>Existencia de un historial crediticio: 5 puntos</p>
                            <p>Antigüedad de historial de crédito: 5 puntos</p>
                            <p>Score: 10 puntos</p>
                            <p>Ingresos más de 10 mil: 5 puntos</p>
                            <p>Gastos mensuales inferiores al 30%: 0 puntos</p>
                            <p>Relación Deuda-ingresos: 0 puntos</p>
                            <p>Puntaje total máximo para sacar: 40 puntos</p>
                        </div>
                    </AccordionItem>
                </Accordion>
            )}

        </div>
    )
}

export default ResultadosModelos;
