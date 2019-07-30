import getElementAttribute from './getElementAttribute'

export default async function isElementEnabled ({ elementId }) {
    return !(await getElementAttribute.call(this, { elementId, name: 'disabled' }))
}
