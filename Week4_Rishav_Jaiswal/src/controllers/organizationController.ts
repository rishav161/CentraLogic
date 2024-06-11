import { Request, Response } from 'express';
import {
  createOrganization,
  getAllOrganizations,
  getOrganizationById,
  updateOrganization,
  deleteOrganization,
} from '../services/organizationService';

export const createOrganizationHandler = async (req: Request, res: Response) => {
  try {
    const organization = await createOrganization(req.body);
    res.json(organization);
  } catch (err) {
    res.json({ error: err});
  }
};

export const getAllOrganizationsHandler = async (req: Request, res: Response) => {
  try {
    const organizations = await getAllOrganizations();
    res.json(organizations);
  } catch (err) {
    res.json({ error: err});
  }
};

export const getOrganizationByIdHandler = async (req: Request, res: Response) => {
  try {
    const organization = await getOrganizationById(req.params.id);
    res.json(organization);
  } catch (err) {
    res.json({ error: err});
  }
};

export const updateOrganizationHandler = async (req: Request, res: Response) => {
  try {
    const organization = await updateOrganization(req.params.id, req.body);
    res.json(organization);
  } catch (err) {
    res.json({ error: err});
  }
};

export const deleteOrganizationHandler = async (req: Request, res: Response) => {
  try {
    await deleteOrganization(req.params.id);
    res.send();
  } catch (err) {
    res.json({ error: err});
  }
};
