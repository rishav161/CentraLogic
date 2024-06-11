import { Request, Response } from 'express';
import * as sowService from '../services/sowService';

export const createSOW = async (req: Request, res: Response): Promise<void> => {
  try {
    const newSOW = await sowService.createSOW(req.body);
    res.status(201).json(newSOW);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create SOW' });
  }
};

export const getSOWById = async (req: Request, res: Response): Promise<void> => {
  try {
    const sow = await sowService.getSOWById(req.params.id);
    if (!sow) {
      res.status(404).json({ error: 'SOW not found' });
    } else {
      res.status(200).json(sow);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to get SOW' });
  }
};

export const getSOWsByCustomerId = async (req: Request, res: Response): Promise<void> => {
  try {
    const sows = await sowService.getSOWsByCustomerId(req.params.customerId);
    res.status(200).json(sows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get SOWs' });
  }
};

export const updateSOW = async (req: Request, res: Response): Promise<void> => {
  try {
    const [updatedCount, updatedRows] = await sowService.updateSOW(req.params.id, req.body);
    if (updatedCount === 0) {
      res.status(404).json({ error: 'SOW not found' });
    } else {
      res.status(200).json(updatedRows[0]);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update SOW' });
  }
};

export const deleteSOW = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedCount = await sowService.deleteSOW(req.params.id);
    if (deletedCount === 0) {
      res.status(404).json({ error: 'SOW not found' });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete SOW' });
  }
};