import {File} from '@asyncapi/generator-react-sdk'
import {FormatHelpers} from '@asyncapi/modelina'

/**
 * @param {{}} asyncapi
 * @param {{[key: string]: any}} params
 */
export default async function ({asyncapi, params}) {
  return (
    <File name="version.gen.go">
      {`// Code generated by "asyncapi/generator"; DO NOT EDIT.

package ${params.packageName}

// SPEC_VERSION is the version of the AsyncAPI specification.
const SPEC_VERSION = "${asyncapi.info().version()}"
`}
    </File>
  )
}