/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: HvEEF/vUZtcD6i2p1i/KDy7K1g6urKjEkRIsV1UzFP7yRKTctjn6xoCPOJ2o/QEALxyVnyERCBhi5l3R3NBB3Q==
 */

/* eslint-disable */
// tslint:disable

interface Migrations {
  /**
   * @default CURRENT_TIMESTAMP
   */
  executed_at: (Date) | null
  hash: string
  id: number & {readonly __brand?: 'migrations_id'}
  name: string
}
export default Migrations;

interface Migrations_InsertParameters {
  /**
   * @default CURRENT_TIMESTAMP
   */
  executed_at?: (Date) | null
  hash: string
  id: number & {readonly __brand?: 'migrations_id'}
  name: string
}
export type {Migrations_InsertParameters}