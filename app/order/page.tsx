import OrderFormContainer from '@/modules/orderForm/Containers/OrderFormContainer'
import React, { Suspense } from 'react'

const page = () => {
  return <Suspense fallback={<p>loading...</p>}>
    <OrderFormContainer />
    </Suspense>
}

export default page
