'use client';

import React, { Component } from 'react'
import Head from 'next/head';

import PublicNavBar from '../../generalContent/public/publicNavBar'
import HomeContent from './homeContent'
import Footer from '../../generalContent/public/footer'

export default function Index() {

return (<>
    <Head>
      <meta charSet='UTF-8' />
      <meta name='description' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='robots' content='index, follow' />
      <meta name='description' content='Descubre la comodidad y la seguridad de gestionar tus finanzas con BeeBank. Nuestra plataforma de banca digital te ofrece acceso rápido y sencillo a tus cuentas, pagos en línea y servicios bancarios desde cualquier lugar. Simplifica tu vida financiera con BeeBank' />
      <meta name='author' content='BeeBank Corporation' />
      <meta name='keywords' content='Banca Digital, Finanzas Personales, Gestión de Cuentas, Pagos en Línea, Transferencias Bancarias, Plataforma Bancaria, Servicios Financieros, Tecnología Bancaria, App Bancaria, Soluciones Financieras, Home Banking, Banca en Línea, BeeBank, Innovación Financiera, Seguridad Bancaria, Acceso a Cuentas, Ahorro Digital, Banco Virtual, Consultas de Saldo, Herramientas Financieras, Servicios Bancarios en Internet, Fondos de inversion, Gestión de Dinero, Banca Electrónica' />
      <title>BeeBank</title>
    </Head>

    <main>
      <PublicNavBar />
      <HomeContent />
      <Footer />
    </main>

  </>
  )
}