import Organization from '../models/organizationModel';

export const createOrganization = async (organizationData: any) => {
  try {
    const organization = await Organization.create(organizationData);
    return organization;
  } catch (err) {
    throw new Error('Error creating organization: '+err);
  }
};

export const getAllOrganizations = async () => {
  try {
    const organizations = await Organization.findAll();
    return organizations;
  } catch (err) {
    throw new Error('Error fetching organizations: ' + err);
  }
};

export const getOrganizationById = async (id: string) => {
  try {
    const organization = await Organization.findByPk(id);
    if (!organization) {
      throw new Error('Organization not found');
    }
    return organization;
  } catch (err) {
    throw new Error('Error fetching organization: ' + err);
  }
};

export const updateOrganization = async (id: string, updateData: any) => {
  try {
    const organization = await getOrganizationById(id);
    await organization.update(updateData);
    return organization;
  } catch (err) {
    throw new Error('Error updating organization: ' + err);
  }
};

export const deleteOrganization = async (id: string) => {
  try {
    const organization = await getOrganizationById(id);
    await organization.destroy();
    return true;
  } catch (err) {
    throw new Error('Error deleting organization: ' + err);
  }
};
