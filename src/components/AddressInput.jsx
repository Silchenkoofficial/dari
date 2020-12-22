import React, { useState } from 'react'
import { AddressSuggestions } from 'react-dadata';

const token = '1bf93b8ba4f31ad2102f71ac66f759d0e9905d6d';

function AddressInput({address, onChange}) {

    return (
        <AddressSuggestions
            token={token}
            value={address}
            onChange={onChange}
            count={5}
            filterLocations={[{"kladr_id": "78"}]} />
    )
}

export default AddressInput
