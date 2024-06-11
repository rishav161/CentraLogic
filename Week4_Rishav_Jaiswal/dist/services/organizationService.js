"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrganization = exports.updateOrganization = exports.getOrganizationById = exports.getAllOrganizations = exports.createOrganization = void 0;
const organizationModel_1 = __importDefault(require("../models/organizationModel"));
const createOrganization = (organizationData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organization = yield organizationModel_1.default.create(organizationData);
        return organization;
    }
    catch (err) {
        throw new Error('Error creating organization: ' + err);
    }
});
exports.createOrganization = createOrganization;
const getAllOrganizations = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organizations = yield organizationModel_1.default.findAll();
        return organizations;
    }
    catch (err) {
        throw new Error('Error fetching organizations: ' + err);
    }
});
exports.getAllOrganizations = getAllOrganizations;
const getOrganizationById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organization = yield organizationModel_1.default.findByPk(id);
        if (!organization) {
            throw new Error('Organization not found');
        }
        return organization;
    }
    catch (err) {
        throw new Error('Error fetching organization: ' + err);
    }
});
exports.getOrganizationById = getOrganizationById;
const updateOrganization = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organization = yield (0, exports.getOrganizationById)(id);
        yield organization.update(updateData);
        return organization;
    }
    catch (err) {
        throw new Error('Error updating organization: ' + err);
    }
});
exports.updateOrganization = updateOrganization;
const deleteOrganization = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organization = yield (0, exports.getOrganizationById)(id);
        yield organization.destroy();
        return true;
    }
    catch (err) {
        throw new Error('Error deleting organization: ' + err);
    }
});
exports.deleteOrganization = deleteOrganization;
//# sourceMappingURL=organizationService.js.map